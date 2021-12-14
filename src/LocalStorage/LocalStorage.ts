export const persistedState = ()=> {
    const getValue = localStorage.getItem('elems')
    if (getValue) {
        return JSON.parse(getValue)
    } else {
        return null
    }
}