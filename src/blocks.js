import {
  typeForm,
  typeFormGroup,
  typeInput,
  typePhoneNumberInput,
  typeTextarea,
  typeSelect,
  typeCountrySelect,
  typeCheckbox,
  typeCheckboxGroup,
  typeRadio,
  typeRadioGroup,
  typeButton,
  typeLabel,
} from "./components";

export default function (editor, opt = {}) {
  const c = opt;
  const bm = editor.BlockManager;
  const addBlock = (id, def) => {
    c.blocks.indexOf(id) >= 0 &&
      bm.add(id, {
        ...def,
        category: { id: "forms", label: "Forms" },
      });
  };

  addBlock(typeForm, {
    label: "Form",
    media:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 5.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 8H3V6h18v2zM22 10.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 13H3v-2h18v2z"/><rect width="10" height="3" x="2" y="15" rx=".5"/></svg>',
    content: {
      type: typeForm,
      attributes: { class: "gjs-form" },
      components: [
        {
          type: typeInput,
          attributes: { type: "hidden" },
        },
        {
          type: typeFormGroup,
          components: [
            { type: typeLabel, components: "Name" },
            { type: typeInput, attributes: { type: "text" } },
          ],
        },
        {
          type: typeFormGroup,
          components: [
            { type: typeLabel, components: "Email" },
            { type: typeInput, attributes: { type: "email" } },
          ],
        },
        {
          type: typeFormGroup,
          components: [
            { type: typeLabel, components: "Select" },
            { type: typeSelect },
          ],
        },
        { type: typeCheckboxGroup },
        { type: typeRadioGroup },
        {
          attributes: { class: "form-fluid" },
          components: [
            { type: typeLabel, attributes: { class: "text-s color-dark-green mb-1" }, components: "Message" },
            { type: typeTextarea },
          ],
        },
        {
          attributes: { class: "form-fluid" },
          components: [
            { type: typeButton },
          ],
        },
      ],
    },
  });

  addBlock(typeFormGroup, {
    label: "Form Group",
    media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M 19.834 8.678 C 19.834 8.117 19.413 7.743 18.74 7.743 L 4.188 7.743 C 3.431 7.743 3.01 8.117 3.01 8.678 L 3.01 14.29 C 3.01 14.852 3.431 15.226 4.104 15.226 L 18.74 15.226 C 19.413 15.226 19.834 14.852 19.834 14.29 L 19.834 8.678 Z M 18.992 14.29 L 3.851 14.29 L 3.851 8.678 L 18.992 8.678 L 18.992 14.29 Z" style=""></path>
        <path d="M 4.692 9.613 L 5.534 9.613 L 5.534 13.355 L 4.692 13.355 Z" style=""></path>
        <path d="M 22.41 6.193 C 22.409 5.087 21.88 4.35 21.033 4.35 L 2.73 4.35 C 1.778 4.35 1.248 5.087 1.249 6.193 L 1.257 17.257 C 1.258 18.365 1.788 19.102 2.634 19.102 L 21.043 19.102 C 21.89 19.102 22.419 18.365 22.418 17.257 L 22.41 6.193 Z M 21.359 17.257 L 2.315 17.257 L 2.307 6.193 L 21.351 6.193 L 21.359 17.257 Z" style=""></path>
      </svg>`,
    content: { type: typeFormGroup },
  });

  addBlock(typeInput, {
    label: "Input",
    media:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"/><path d="M4 10h1v4H4z"/></svg>',
    content: { type: typeInput },
  });

  addBlock(typeTextarea, {
    label: "Textarea",
    media:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 7.5c0-.9-.5-1.5-1.3-1.5H3.4C2.5 6 2 6.6 2 7.5v9c0 .9.5 1.5 1.3 1.5h17.4c.8 0 1.3-.6 1.3-1.5v-9zM21 17H3V7h18v10z"/><path d="M4 8h1v4H4zM19 7h1v10h-1zM20 8h1v1h-1zM20 15h1v1h-1z"/></svg>',
    content: { type: typeTextarea },
  });

  addBlock(typeSelect, {
    label: "Select",
    media:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"/><path d="M18.5 13l1.5-2h-3zM4 11.5h11v1H4z"/></svg>',
    content: { type: typeSelect },
  });

  addBlock(typeButton, {
    label: "Button",
    media:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"/><path d="M4 11.5h16v1H4z"/></svg>',
    content: { type: typeButton },
  });

  addBlock(typeLabel, {
    label: "Label",
    media:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 11.9c0-.6-.5-.9-1.3-.9H3.4c-.8 0-1.3.3-1.3.9V17c0 .5.5.9 1.3.9h17.4c.8 0 1.3-.4 1.3-.9V12zM21 17H3v-5h18v5z"/><rect width="14" height="5" x="2" y="5" rx=".5"/><path d="M4 13h1v3H4z"/></svg>',
    content: { type: typeLabel },
  });

  addBlock(typeCheckbox, {
    label: "Checkbox",
    media:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 17l-5-5 1.41-1.42L10 14.17l7.59-7.59L19 8m0-5H5c-1.11 0-2 .89-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2z"></path></svg>',
    content: { type: typeCheckbox },
  });

  addBlock(typeCheckboxGroup, {
    label: "Checkbox Group",
    media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M 4.244 11.339 L 2.791 9.886 L 3.201 9.473 L 4.244 10.516 L 6.45 8.311 L 6.859 8.723 M 6.859 7.271 L 2.791 7.271 C 2.469 7.271 2.21 7.529 2.21 7.852 L 2.21 11.92 C 2.21 12.239 2.472 12.501 2.791 12.501 L 6.859 12.501 C 7.179 12.501 7.44 12.239 7.44 11.92 L 7.44 7.852 C 7.44 7.531 7.18 7.271 6.859 7.271 Z" style=""></path>
    <path d="M 11.333 11.333 L 9.88 9.88 L 10.29 9.467 L 11.333 10.51 L 13.539 8.305 L 13.948 8.717 M 13.948 7.265 L 9.88 7.265 C 9.558 7.265 9.299 7.523 9.299 7.846 L 9.299 11.914 C 9.299 12.233 9.561 12.495 9.88 12.495 L 13.948 12.495 C 14.268 12.495 14.529 12.233 14.529 11.914 L 14.529 7.846 C 14.529 7.525 14.269 7.265 13.948 7.265 Z" style=""></path>
    <path d="M 18.592 11.199 L 17.139 9.746 L 17.549 9.333 L 18.592 10.376 L 20.798 8.171 L 21.207 8.583 M 21.207 7.131 L 17.139 7.131 C 16.817 7.131 16.558 7.389 16.558 7.712 L 16.558 11.78 C 16.558 12.099 16.82 12.361 17.139 12.361 L 21.207 12.361 C 21.527 12.361 21.788 12.099 21.788 11.78 L 21.788 7.712 C 21.788 7.391 21.528 7.131 21.207 7.131 Z" style=""></path>
  </svg>`,
    content: { type: typeCheckboxGroup },
  });

  addBlock(typeRadio, {
    label: "Radio",
    media:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m0-18C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 5c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"></path></svg>',
    content: { type: typeRadio },
  });

  addBlock(typeRadioGroup, {
    label: "Radio Group",
    media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M 12.428 14.081 C 11.117 14.081 10.055 12.779 10.055 11.171 C 10.055 9.567 11.117 8.263 12.428 8.263 C 13.74 8.263 14.802 9.567 14.802 11.171 C 14.802 12.779 13.74 14.081 12.428 14.081 M 12.428 7.537 C 10.79 7.537 9.462 9.164 9.462 11.171 C 9.462 13.178 10.79 14.807 12.428 14.807 C 14.066 14.807 15.395 13.178 15.395 11.171 C 15.395 9.164 14.066 7.537 12.428 7.537 M 12.428 9.353 C 11.609 9.353 10.945 10.168 10.945 11.171 C 10.945 12.175 11.609 12.99 12.428 12.99 C 13.248 12.99 13.912 12.175 13.912 11.171 C 13.912 10.168 13.248 9.353 12.428 9.353 Z" style=""></path>
        <path d="M 18.257 14.081 C 16.945 14.081 15.882 12.779 15.882 11.171 C 15.882 9.567 16.945 8.263 18.257 8.263 C 19.567 8.263 20.63 9.567 20.63 11.171 C 20.63 12.779 19.567 14.081 18.257 14.081 M 18.257 7.54 C 16.619 7.54 15.289 9.166 15.289 11.171 C 15.289 13.178 16.619 14.807 18.257 14.807 C 19.894 14.807 21.223 13.178 21.223 11.171 C 21.223 9.166 19.894 7.54 18.257 7.54 M 18.257 9.354 C 17.437 9.354 16.772 10.168 16.772 11.171 C 16.772 12.175 17.437 12.99 18.257 12.99 C 19.076 12.99 19.74 12.175 19.74 11.171 C 19.74 10.168 19.076 9.354 18.257 9.354 Z" style=""></path>
        <path d="M 6.435 14.183 C 5.123 14.183 4.061 12.882 4.061 11.272 C 4.061 9.669 5.123 8.365 6.435 8.365 C 7.747 8.365 8.808 9.669 8.808 11.272 C 8.808 12.882 7.747 14.183 6.435 14.183 M 6.435 7.638 C 4.798 7.638 3.468 9.266 3.468 11.272 C 3.468 13.282 4.798 14.911 6.435 14.911 C 8.073 14.911 9.402 13.282 9.402 11.272 C 9.402 9.266 8.073 7.638 6.435 7.638 M 6.435 9.458 C 5.616 9.458 4.952 10.27 4.952 11.272 C 4.952 12.275 5.616 13.092 6.435 13.092 C 7.254 13.092 7.919 12.275 7.919 11.272 C 7.919 10.27 7.254 9.458 6.435 9.458 Z" style=""></path>
      </svg>`,
    content: { type: typeRadioGroup },
  });

  addBlock(typeCountrySelect, {
    label: "Country Select",
    media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g transform="matrix(0.687215, 0, 0, 0.687215, 2.944731, 3.082897)">
        <path d="M19.3,16.9c0.4-0.7,0.7-1.5,0.7-2.4c0-2.5-2-4.5-4.5-4.5S11,12,11,14.5s2,4.5,4.5,4.5c0.9,0,1.7-0.3,2.4-0.7l3.2,3.2 l1.4-1.4L19.3,16.9z M15.5,17c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5S16.9,17,15.5,17z M12,20v2 C6.48,22,2,17.52,2,12C2,6.48,6.48,2,12,2c4.84,0,8.87,3.44,9.8,8h-2.07c-0.64-2.46-2.4-4.47-4.73-5.41V5c0,1.1-0.9,2-2,2h-2v2 c0,0.55-0.45,1-1,1H8v2h2v3H9l-4.79-4.79C4.08,10.79,4,11.38,4,12C4,16.41,7.59,20,12,20z"></path>
      </g>
    </svg>`,
    content: { type: typeCountrySelect },
  });

  addBlock(typePhoneNumberInput, {
    label: "Phone Number Input",
    media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g transform="matrix(0.687215, 0, 0, 0.687215, 3.005817, 4.243526)">
        <g>
          <path d="M14,4h2v2h-2V4z M13,7h2v2h-2V7z M11,4h2v2h-2V4z M18,9h-2V7h2V9z M19,6h-2V4h2V6z M21,9h-2V7h2V9z M22,6h-2V4h2V6z M14.62,14.38L12.1,16.9c-2.5-1.43-4.57-3.5-6-6l2.52-2.52C8.86,8.14,8.96,7.8,8.9,7.48L8.16,3.8C8.07,3.34,7.66,3,7.18,3H3.03 C2.47,3,2,3.47,2.03,4.03C2.2,6.92,3.05,9.63,4.43,12c1.58,2.73,3.85,4.99,6.57,6.57c2.37,1.37,5.08,2.23,7.97,2.4 c0.56,0.03,1.03-0.44,1.03-1v-4.15c0-0.48-0.34-0.89-0.8-0.98l-3.67-0.73C15.2,14.04,14.86,14.14,14.62,14.38z M14,10h2v2h-2V10z M11,10h2v2h-2V10z M19,12h-2v-2h2V12z M22,12h-2v-2h2V12z"></path>
        </g>
      </g>
    </svg>`,
    content: { type: typePhoneNumberInput },
  });
}
