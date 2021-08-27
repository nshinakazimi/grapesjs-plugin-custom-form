export const typeForm = "form";
export const typeFormGroup = "form-group";
export const typeInput = "input";
export const typePhoneNumberInput = "phone-input";
export const typeTextarea = "textarea";
export const typeSelect = "select";
export const typeCountrySelect = "country-select";
export const typeCheckbox = "checkbox";
export const typeCheckboxGroup = "checkbox-group";
export const typeRadio = "radio";
export const typeRadioGroup = "radio-group";
export const typeButton = "button";
export const typeLabel = "label";
export const typeOption = "option";

export default function (editor, opt = {}) {
  const domc = editor.DomComponents;

  const idTrait = {
    name: "id",
  };

  const forTrait = {
    name: "for",
  };

  const nameTrait = {
    name: "name",
  };

  const placeholderTrait = {
    name: "placeholder",
  };

  const valueTrait = {
    name: "value",
  };

  const requiredTrait = {
    type: "checkbox",
    name: "required",
  };

  const checkedTrait = {
    type: "checkbox",
    name: "checked",
  };

  domc.addType(typeForm, {
    isComponent: (el) => el.tagName == "FORM",

    model: {
      defaults: {
        tagName: "form",
        droppable: ":not(form)",
        draggable: ":not(form)",
        attributes: { method: "get" },
        traits: [
          {
            type: "select",
            name: "method",
            options: [
              { value: "get", name: "GET" },
              { value: "post", name: "POST" },
            ],
          },
          {
            name: "action",
          },
        ],
      },
    },

    view: {
      events: {
        submit: (e) => e.preventDefault(),
      },
    },
  });

  // FormGroup
  domc.addType(typeFormGroup, {
    isComponent: (el) => el.tagName == "DIV",

    model: {
      defaults: {
        draggable: "form, form *",
        attributes: { class: "form-fluid" },
        components: [{ type: typeLabel }, { type: typeInput, attributes: { type: "text" } }],
      },
    },
  });

  // INPUT
  domc.addType(typeInput, {
    isComponent: (el) => el.tagName == "INPUT",

    model: {
      defaults: {
        tagName: "input",
        draggable: "form, form *",
        droppable: false,
        highlightable: false,
        attributes: { type: "text" },
        traits: [
          nameTrait,
          placeholderTrait,
          {
            type: "select",
            name: "type",
            options: [{ value: "text" }, { value: "email" }, { value: "password" }, { value: "number" }],
          },
          requiredTrait,
        ],
      },
    },

    extendFnView: ["updateAttributes"],
    view: {
      updateAttributes() {
        this.el.setAttribute("autocomplete", "off");
      },
    },
  });

  // TEXTAREA
  domc.addType(typeTextarea, {
    extend: typeInput,
    isComponent: (el) => el.tagName == "TEXTAREA",

    model: {
      defaults: {
        tagName: "textarea",
        attributes: {},
        traits: [nameTrait, placeholderTrait, requiredTrait],
      },
    },
  });

  // OPTION
  domc.addType(typeOption, {
    isComponent: (el) => el.tagName == "OPTION",

    model: {
      defaults: {
        tagName: "option",
        layerable: false,
        droppable: false,
        draggable: false,
        highlightable: false,
      },
    },
  });

  const createOption = (value, name) => ({ type: typeOption, components: name, attributes: { value } });

  // SELECT
  domc.addType(typeSelect, {
    extend: typeInput,
    isComponent: (el) => el.tagName == "SELECT",

    model: {
      defaults: {
        tagName: "select",
        components: [createOption("opt1", "Option 1"), createOption("opt2", "Option 2")],
        traits: [
          nameTrait,
          {
            name: "options",
            type: "select-options",
          },
          requiredTrait,
        ],
      },
    },

    view: {
      events: {
        mousedown: (e) => e.preventDefault(),
      },
    },
  });

  // CHECKBOX
  domc.addType(typeCheckbox, {
    extend: typeInput,
    isComponent: (el) => el.tagName == "INPUT" && el.type == "checkbox",

    model: {
      defaults: {
        copyable: false,
        attributes: { type: "checkbox" },
        traits: [idTrait, nameTrait, valueTrait, requiredTrait, checkedTrait],
      },
    },

    view: {
      events: {
        click: (e) => e.preventDefault(),
      },

      init() {
        this.listenTo(this.model, "change:attributes:checked", this.handleChecked);
      },

      handleChecked() {
        this.el.checked = !!this.model.get("attributes").checked;
      },
    },
  });

  // RADIO
  domc.addType(typeRadio, {
    extend: typeCheckbox,
    isComponent: (el) => el.tagName == "INPUT" && el.type == "radio",

    model: {
      defaults: {
        attributes: { type: "radio" },
      },
    },
  });

  domc.addType(typeButton, {
    extend: typeInput,
    isComponent: (el) => el.tagName == "BUTTON",

    model: {
      defaults: {
        tagName: "button",
        attributes: { type: "button", class: "btn btn-normal px-5 text-sm w-100 font-weight-600" },
        text: "Send",
        traits: [
          {
            name: "text",
            changeProp: true,
          },
          {
            type: "select",
            name: "type",
            options: [{ value: "button" }, { value: "submit" }, { value: "reset" }],
          },
        ],
      },

      init() {
        const comps = this.components();
        const tChild = comps.length === 1 && comps.models[0];
        const chCnt = (tChild && tChild.is("textnode") && tChild.get("content")) || "";
        const text = chCnt || this.get("text");
        this.set({ text });
        this.on("change:text", this.__onTextChange);
        text !== chCnt && this.__onTextChange();
      },

      __onTextChange() {
        this.components(this.get("text"));
      },
    },

    view: {
      events: {
        click: (e) => e.preventDefault(),
      },
    },
  });

  // LABEL
  domc.addType(typeLabel, {
    extend: "text",
    isComponent: (el) => el.tagName == "LABEL",

    model: {
      defaults: {
        tagName: "label",
        attributes: { class: "text-s color-dark-green mb-1" },
        components: "Label",
        traits: [forTrait],
      },
    },
  });

  //CHECKBOX-GROUP

  domc.addType(typeCheckboxGroup, {
    isComponent: (el) => el.tagName == "DIV",

    model: {
      defaults: {
        draggable: "form, form *",
        attributes: { class: "form-fluid" },
        components: [
          { type: typeLabel, components: "CheckboxGroup" },
          {
            attributes: { class: "checkbox-wrapper mb-1" },
            components: [
              { type: typeLabel, components: "One" },
              { type: typeCheckbox, attributes: { name: "checkbox0" } },
              { tagName: "span", attributes: { class: "checkmark" } },
            ],
          },
          {
            attributes: { class: "checkbox-wrapper mb-1" },
            components: [
              { type: typeLabel, components: "Two" },
              { type: typeCheckbox, attributes: { name: "checkbox1" } },
              { tagName: "span", attributes: { class: "checkmark" } },
            ],
          },
        ],
      },
    },
  });

  // RADIO-GROUP
  domc.addType(typeRadioGroup, {
    isComponent: (el) => el.tagName == "DIV",

    model: {
      defaults: {
        draggable: "form, form *",
        attributes: { class: "form-fluid" },
        components: [
          { type: typeLabel, components: "RadioGroup" },
          {
            attributes: { class: "radio-wrapper mb-1" },
            components: [
              { type: typeLabel, components: "One" },
              { type: typeRadio, attributes: { name: "radioGroup0" } },
              { tagName: "span", attributes: { class: "radio-checkmark" } },
            ],
          },
          {
            attributes: { class: "radio-wrapper mb-1" },
            components: [
              { type: typeLabel, components: "Two" },
              { type: typeRadio, attributes: { name: "radioGroup0" } },
              { tagName: "span", attributes: { class: "radio-checkmark" } },
            ],
          },
        ],
      },
    },
  });

  // COUNTRY-SELECT
  domc.addType(typeCountrySelect, {
    isComponent: (el) => el.tagName == "DIV",

    model: {
      defaults: {
        draggable: "form, form *",
        attributes: { class: "form-fluid" },
        components: [
          { type: typeLabel, components: "Countries" },
          { type: typeSelect, attributes: { class: "gjs-country-selector", name: "country" }, components: [] },
        ],
      },
    },
  });

  // PHONENUMBER-SELECT
  domc.addType(typePhoneNumberInput, {
    isComponent: (el) => el.tagName == "DIV",

    model: {
      defaults: {
        draggable: "form, form *",
        attributes: { class: "form-fluid" },
        components: [
          { type: typeLabel, components: "Phone Number" },
          {
            attributes: { class: "gjs-phone-number-wrapper" },
            components: [
              { type: typeSelect, attributes: { class: "country-code-selector", name: "country-code" }, components: [] },
              {
                type: typeInput,
                attributes: {
                  type: "text",
                  name: "phone_number",
                  id: "phone_number",
                  class: "w-100",
                  placeholder: "Enter your phone number",
                },
              },
            ],
          },
          { tagName: "span", attributes: { class: "errorMsg" } },
        ],
      },
    },
  });
}
