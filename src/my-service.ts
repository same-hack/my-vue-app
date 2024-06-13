import { reactive } from "vue"; // Vueのreactive関数をインポート

// リアクティブな状態オブジェクトを作成
// reactive関数は、オブジェクトをリアクティブにし、状態が変化したときにVueコンポーネントが自動的に再レンダリングされるようにします
export const state = reactive({
  userName: "サメハック", // 初期のユーザー名
  job: "エンジニア", // 初期の仕事
});

// ユーザー名を更新する関数
// この関数は、引数として受け取った名前をstate.userNameに設定します
export const updateUserName = (name) => {
  state.userName = name; // stateオブジェクトのuserNameプロパティを新しい名前に更新
};

// ユーザー名をクリアする関数
// この関数は、state.userNameを空の文字列に設定します
export const clearUserName = () => {
  state.userName = ""; // stateオブジェクトのuserNameプロパティを空の文字列に更新
};
