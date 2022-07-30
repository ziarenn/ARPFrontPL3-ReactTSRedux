import { authReducer } from "./authReducer";
const initialState = {
  authState: false,
};
describe("productActions.ts", () => {
  describe("authReducer()", () => {
    it("should return a state object with a authState property", () => {
      const action = { type: "SET_AUTH_STATE", payload: false };
      const result = authReducer(initialState, action);
      expect(result).toBeInstanceOf(Object);
      expect(result).toHaveProperty("authState");
      expect(result.authState).toBe(action.payload);
    });
    it("should return an old state object if invalid action type is provided", () => {
      const action = {
        type: 123,
        payload: true,
      };
      const result = authReducer(initialState, action);
      expect(result).toBe(initialState);
    });
  });
});
