export const isPersonalInformationValid = (formData) => {
    const {name, email} = formData
    return name !== '' && email !== '' // note: this is an example. email validation should be more extensive
}