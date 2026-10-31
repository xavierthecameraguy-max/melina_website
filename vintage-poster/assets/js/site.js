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
      toggle.querySelector("span").textContent = open ? "Close" : "Menu";
      nav.setAttribute("data-open", String(open || !small.matches));
    };
    setOpen(false);
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    var reset = function () {
      setOpen(false);
    };
    if (small.addEventListener) small.addEventListener("change", reset);
    else if (small.addListener) small.addListener(reset); // Safari 13 and older
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

  // The element an error belongs to: the field, or the fieldset for a radio group.
  var errorTarget = function (field) {
    return field.type === "radio" ? field.closest(".field") : field;
  };

  var problemWith = function (field) {
    var form = field.form;
    var value = (field.value || "").trim();
    if (field.type === "radio") {
      var group = form.querySelectorAll('input[name="' + CSS.escape(field.name) + '"]');
      var picked = Array.prototype.some.call(group, function (r) { return r.checked; });
      return field.required && !picked ? "Please pick one." : "";
    }
    if (field.required && !value) {
      return field.dataset.error || "Please fill this in.";
    }
    if (value && field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "That email doesn't look quite right. It should look like name@example.com.";
    }
    if (value && field.type === "tel" && value.replace(/\D/g, "").length < 10) {
      return "Please include the area code, like 859 555 0123.";
    }
    // Contact form: a phone number or an email, whichever they prefer.
    var phone = form.querySelector("#m-phone");
    var email = form.querySelector("#m-email");
    if (field === phone && !value && !email.value.trim()) {
      return "Please give me a phone number or an email so I can reply.";
    }
    var reach = form.querySelector('input[name="Best way to reach you"]:checked');
    if (field === email && !value && reach && reach.value === "Email") {
      return "You picked email, so please add your email address.";
    }
    return "";
  };

  var showError = function (field, message) {
    var box = field.closest(".field");
    var error = box.querySelector(".error");
    var target = errorTarget(field);
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

  // Once a field is fixed, take it off the "things to fix" list too.
  var clearFromSummary = function (form, id) {
    var alert = form.querySelector(".form-alert");
    var item = alert.querySelector('li[data-for="' + id + '"]');
    if (!item) return;
    item.remove();
    var left = alert.querySelectorAll("li").length;
    if (!left) alert.hidden = true;
    else alert.querySelector("h3").textContent = left === 1 ? "One thing to fix" : left + " things to fix";
  };

  document.querySelectorAll(".js-form").forEach(function (form) {
    form.noValidate = true;
    var fields = form.querySelectorAll(".field input:not([type=hidden]), .field textarea, .field select");

    // Re-check every flagged field while typing: fixing one (adding an email) can fix
    // another (the "phone or email" rule). Doing it on input rather than on blur keeps
    // the page from shifting under the next click.
    var recheck = function () {
      fields.forEach(function (f) {
        if (!errorTarget(f).hasAttribute("aria-invalid")) return;
        var message = problemWith(f);
        showError(f, message);
        if (!message) clearFromSummary(form, errorTarget(f).id);
      });
    };
    fields.forEach(function (field) {
      field.addEventListener("input", recheck);
      field.addEventListener("change", recheck);
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
          var id = errorTarget(p.field).id;
          // Custom messages already name the field; generic ones get the label in front.
          var text = p.field.dataset.error === p.message || p.field.id === "m-phone" || p.field.id === "m-email"
            ? p.message
            : labelText(p.field).replace(/([^?])$/, "$1:") + " " + p.message;
          return '<li data-for="' + id + '"><a href="#' + id + '">' + text + "</a></li>";
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

      var data = new FormData(form);
      data.delete("redirect"); // only for the no-JavaScript fallback

      fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      })
        .then(function (response) {
          return response.json().then(function (result) {
            if (!response.ok || !result.success) throw new Error(result.message || "Not sent");
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
            "<h3>Sorry, that didn't send</h3><p>Please try again in a minute" +
              (call ? ". " + call.innerHTML.replace("Rather talk? ", "Or ").replace("Call me", "call me") + "." : ".") +
              "</p>"
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
