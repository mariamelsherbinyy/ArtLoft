describe("Portfolio Upload", () => {
    it("should upload an image successfully", async () => {
        const response = await uploadPortfolio({ file: "image.jpg", visibility: "public" });
        expect(response.status).toBe(201);
    });
});
