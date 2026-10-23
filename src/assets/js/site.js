// Onyx World Travel: menu, forms and gallery. The site works without this file;
// it only makes those three things friendlier.

(function () {
  "use strict";

  // ---------- Menu (phones and small tablets) ----------
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    var small = window.matchMedia("(max-width: 56em)");
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.querySelector("span").textContent = open ? "Close menu" : "Menu";
      nav.setAttribute("data-open", String(open || !small.matches));
    };
    setOpen(false);
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    small.addEventListener("change", function () {
      setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  // ---------- Forms ----------
  var labelText = function (field) {
    var label = field.closest(".field").querySelector("label, legend");
    return label ? label.childNodes[0].textContent.trim() : "This field";
  };

  var problemWith = function (field) {
    var value = (field.value || "").trim();
    if (field.type === "radio") {
      var group = field.form.querySelectorAll('input[name="' + CSS.escape(field.name) + '"]');
      var picked = Array.prototype.some.call(group, function (r) { return r.checked; });
      return field.required && !picked ? "Please pick one." : "";
    }
    if (field.required && !value) {
      return "Please fill in " + labelText(field).toLowerCase() + ".";
    }
    if (value && field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "That email doesn't look quite right. It should look like name@example.com.";
    }
    if (value && field.type === "tel" && value.replace(/\D/g, "").length < 10) {
      return "Please include the area code, like 859 555 0123.";
    }
    return "";
  };

  var showError = function (field, message) {
    var box = field.closest(".field");
    var error = box.querySelector(".error");
    var target = field.type === "radio" ? box : field;
    if (message) {
      error.textContent = message;
      error.hidden = false;
      target.setAttribute("aria-invalid", "true");
    } else {
      error.textContent = "";
      error.hidden = true;
      target.removeAttribute("aria-invalid");
    }
  };

  var showAlert = function (form, html, info) {
    var alert = form.querySelector(".form-alert");
    alert.innerHTML = html;
    alert.classList.toggle("is-info", !!info);
    alert.hidden = false;
    alert.focus();
    alert.scrollIntoView({ block: "center" });
  };

  document.querySelectorAll(".js-form").forEach(function (form) {
    form.noValidate = true;
    var fields = form.querySelectorAll(".field input:not([type=hidden]), .field textarea, .field select");

    // Clear an error as soon as it's fixed.
    fields.forEach(function (field) {
      field.addEventListener("change", function () {
        if (field.closest(".field").querySelector(".error:not([hidden])")) {
          showError(field, problemWith(field));
        }
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var problems = [];
      var seenGroups = {};
      fields.forEach(function (field) {
        if (field.type === "radio") {
          if (seenGroups[field.name]) return;
          seenGroups[field.name] = true;
        }
        var message = problemWith(field);
        showError(field, message);
        if (message) problems.push({ field: field, message: message });
      });

      if (problems.length) {
        var items = problems.map(function (p) {
          var id = p.field.type === "radio" ? p.field.closest(".field").id : p.field.id;
          return '<li><a href="#' + id + '">' + labelText(p.field) + "</a>: " + p.message + "</li>";
        });
        showAlert(
          form,
          "<h3>" + (problems.length === 1 ? "One thing to fix" : problems.length + " things to fix") +
            "</h3><ul>" + items.join("") + "</ul>"
        );
        return;
      }

      if (form.dataset.connected !== "yes") {
        showAlert(
          form,
          "<h3>This form isn't connected yet</h3><p>This is a draft website, so nothing was sent. " +
            "Once it goes live, this form will send straight to Milena.</p>",
          true
        );
        return;
      }

      var button = form.querySelector("[type=submit]");
      var buttonText = button.textContent;
      button.disabled = true;
      button.textContent = "Sending...";

      fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      })
        .then(function (response) {
          return response.json().then(function (data) {
            if (!response.ok || !data.success) throw new Error(data.message || "Not sent");
          });
        })
        .then(function () {
          window.location.href = form.dataset.thanks;
        })
        .catch(function () {
          button.disabled = false;
          button.textContent = buttonText;
          var call = form.querySelector(".form-actions p");
          showAlert(
            form,
            "<h3>Sorry, that didn't send</h3><p>Please try again in a minute. " +
              (call ? call.innerHTML.replace("Rather talk? ", "Or ") : "") + "</p>"
          );
        });
    });
  });

  // Error summary links: move to the field itself, not just scroll to it.
  document.addEventListener("click", function (e) {
    var link = e.target.closest(".form-alert a[href^='#']");
    if (!link) return;
    var target = document.getElementById(link.getAttribute("href").slice(1));
    if (!target) return;
    e.preventDefault();
    var focusable = target.matches("input, textarea, select") ? target : target.querySelector("input");
    target.scrollIntoView({ block: "center" });
    if (focusable) focusable.focus();
  });

  // ---------- Gallery: tap a photo to see it bigger ----------
  var links = document.querySelectorAll(".js-lightbox");
  if (links.length && window.HTMLDialogElement) {
    var dialog = document.createElement("dialog");
    dialog.className = "lightbox";
    dialog.innerHTML =
      '<img alt=""><p></p><button class="btn btn-dark" type="button">Close</button>';
    document.body.appendChild(dialog);
    var img = dialog.querySelector("img");
    var caption = dialog.querySelector("p");
    dialog.querySelector("button").addEventListener("click", function () {
      dialog.close();
    });
    dialog.addEventListener("click", function (e) {
      if (e.target === dialog) dialog.close();
    });
    links.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        var thumb = link.querySelector("img");
        img.src = link.href;
        img.alt = thumb ? thumb.alt : "";
        caption.textContent = link.dataset.caption || "";
        dialog.showModal();
      });
    });
  }
})();
