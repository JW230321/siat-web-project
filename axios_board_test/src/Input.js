import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BoardService from "./BoardService";

function Input() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const changeTitleHandler = (e) => {
        setTitle(e.target.value);
    };

    const changeContentHandler = (e) => {
        setContent(e.target.value);
    };

    const createBoard = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        const board = {
            title,
            content
        };
        console.log("board => " + JSON.stringify(board));
        BoardService.createBoard(board).then(() => {
            navigate('/board');
        });
    };

    return (
        <>
            <br />
            <form onSubmit={createBoard}> {/* Use onSubmit event instead of onClick */}
                제목 : <input name="name" type="text" onChange={changeTitleHandler} value={title} />
                내용 : <input name="email" type="text" onChange={changeContentHandler} value={content} />
                <button type="submit">저장</button> {/* Change the button type to "submit" */}
            </form>
        </>
    );
}

export default Input;
