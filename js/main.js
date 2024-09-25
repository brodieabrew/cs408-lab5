export const lidsForm = document.getElementById("lids-form");

export function submitLIDSForm(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const formProps = Object.fromEntries(formData);
    alert(formProps.lids);
}

lidsForm.onsubmit = submitLIDSForm;