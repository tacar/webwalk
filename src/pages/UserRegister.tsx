import { useState } from "react";
import { APIWalkClient } from "../api";

const client = new APIWalkClient();

export const UserRegister = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setIsLoading(true);

    try {
      // まず既存ユーザーを検索
      try {
        console.log("Searching for existing user:", email);
        const user = await client.searchUser(email);
        console.log("Found user:", user);
        setMessage("このメールアドレスは既に登録されています");
        setIsLoading(false);
        return;
      } catch (error) {
        // エラーの詳細をログ出力
        console.log("Search error details:", {
          error,
          status: error instanceof Error ? error.message : "Unknown error",
        });
        // 404エラーの場合のみ新規登録を続行
        if (error instanceof Error && !error.message.includes("404")) {
          setMessage(`ユーザー検索中にエラーが発生しました: ${error.message}`);
          setIsLoading(false);
          return;
        }
        console.log("User not found (404), proceeding with registration");
      }

      // 新規ユーザー登録
      console.log("Registering new user:", { email, name });
      const response = await client.addUser({
        email,
        name,
        password,
      });
      console.log("Registration response:", response);

      setMessage(`ユーザーを登録しました: ${response.message}`);
      setEmail("");
      setName("");
      setPassword("");
    } catch (error) {
      console.error("Registration error:", error);
      if (error instanceof Error) {
        setMessage(`登録に失敗しました: ${error.message}`);
      } else {
        setMessage("登録に失敗しました");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">ユーザー登録</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            名前
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={isLoading}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            パスワード
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
            minLength={6}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            isLoading
              ? "bg-indigo-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        >
          {isLoading ? "処理中..." : "登録"}
        </button>
      </form>

      {message && (
        <div
          className={`mt-4 p-3 rounded ${
            message.includes("失敗") || message.includes("既に")
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
};
