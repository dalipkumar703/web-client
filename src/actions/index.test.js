const index = require("./index")
// @ponicode
describe("index.input", () => {
    test("0", () => {
        let callFunction = () => {
            index.input("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.input("Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.input("This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.input(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
