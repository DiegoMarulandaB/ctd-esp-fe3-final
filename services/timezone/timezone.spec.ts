// este import vino incompleto al realizar la clonación
// import ''

describe('Timezones', () => {
  it('should always be UTC', () => {
    expect(new Date().getTimezoneOffset()).toBe(0)
  })
})
