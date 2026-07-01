import Editor from "@monaco-editor/react";

function CodeEditor({ code, setCode }) {

    return (

        <Editor
            height="100%"
            language="java"
            value={code}
            onChange={(value) => setCode(value || "")}
            theme="vs-dark"
        />

    );

}

export default CodeEditor;