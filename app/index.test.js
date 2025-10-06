const request = require("supertest");
const app = require("./index.js")


describe("Express App", () => {
    it("GET / returns Hello World", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200)
        expect(res.text).toBe("Hello World")
    })

    it("GET /:id return Hello World with ID", async () => {
        const res = await request(app).get("/chai")
        expect(res.statusCode).toBe(200)
        expect(res.text).toBe("Hello World chai")
    })

    it("GET /chat return Welcome To Chat", async () => {
        const res = await request(app).get("/chat")
        expect(res.statusCode).toBe(200)
        expect(res.text).toBe("Welcome To Chat")
    })
})