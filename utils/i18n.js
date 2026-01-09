// 國家代碼表 https://www.cbc.gov.tw/public/attachment/83189591771.pdf
// 各國語系代碼表 https://hoohoo.top/blog/national-language-code-table-zh-tw-zh-cn-en-us-json-format/
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import zh_tw_Json from "../locales/zh_TW.json";
import en_Json from "../locales/en.json";

const resources = {
	zh: { ...zh_tw_Json },
	en: { ...en_Json },
};

const defaultLanguage = "zh-TW";
let detectedLanguage = defaultLanguage;

if (typeof window !== "undefined") {
	detectedLanguage = (localStorage.getItem("selectedLanguage") || navigator.language || defaultLanguage).split("-")[0];
}

i18n.use(initReactI18next).init({
	lng: detectedLanguage,
	fallbackLng: defaultLanguage,
	resources: { ...resources },
	interpolation: {
		// 是否要讓字詞 escaped 來防止 xss 攻擊，因為 React.js 已經做了就設成 false 即可
		escapeValue: false,
	},
});
