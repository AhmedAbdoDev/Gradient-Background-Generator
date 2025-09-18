export default function CodeDisplay({ cssCode, isCopied, copyToClipboard }) {
  return (
    <div className="flex flex-col items-center w-full max-w-2xl mt-8">
      <pre className="bg-gray-900 bg-opacity-70 p-6 rounded-xl text-green-400 font-mono text-sm w-full overflow-auto border border-gray-700">
        <code className="whitespace-pre-wrap">{cssCode}</code>
      </pre>
      <button
        onClick={copyToClipboard}
        className={`mt-6 px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-colors ${
          isCopied
            ? "bg-green-600 hover:bg-green-700"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {isCopied ? "Copied!" : "Copy CSS Code"}
      </button>
    </div>
  );
}
