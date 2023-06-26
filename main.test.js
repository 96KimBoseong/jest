const sum = require("./main");

test("adds 1+2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
//toBe = matcher함수
test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});
test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

const memberList = ["gildong", "soonsin"];
test("the memberList has soonsin on it", () => {
  expect(memberList).toContain("soonsin");
});
