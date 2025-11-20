import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src/constants/data.ts");
const fileContents = fs.readFileSync(filePath, 'utf8');

const newUserInfo = {
  headerTitle: "luke",
  userName: "최선규(Luke)",
  mascot: "./public/images/test-tube.png",
  resume: "https://fascinated-carp-209.notion.site/SunKyu-Choi-s-Resume-2a4e3ddac0758025a567e36b0a332d44?source=copy_link",
  github: "https://github.com/luke0408",
  domain: "https://luke-blog.vercel.app/",
  meta: {
    title: "luke의 우당탕탕 실험실",
    description: "백엔드 개발자 최선규(luke)의 실험실입니다.",
  },
};

const newUserInfoJson = JSON.stringify(newUserInfo, null, 2);
const updatedContents = fileContents.replace(
  /export const USER_INFORMATIONS = {[\s\S]*?};/,
  `export const USER_INFORMATIONS = ${newUserInfoJson};`,
);
fs.writeFileSync(filePath, updatedContents, "utf8");

console.log("USER_INFORMATIONS 객체가 업데이트되었습니다.");
console.log("optional 항목 중 작성하지 않은 항목이 있다면 꼭!! 추후 작성해 주세요😉");
console.log("src/constants/data.ts");
