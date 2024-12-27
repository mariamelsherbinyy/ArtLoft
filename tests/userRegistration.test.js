describe("User Registration", () => {
    it("should register a user with valid input", async () => {
        const response = await registerUser({ email: "test@example.com", password: "Test123!" });
        expect(response.status).toBe(200);
    });
});
