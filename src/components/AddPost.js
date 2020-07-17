import React from 'react'

export default function AddPost(props) {
    const [curBackgroundColor, setCurBackgroundColor] = 'white';

    function clearFields(){

        // input elements
        var inputs = document.querySelectorAll('input');

        // clear all
        for( let i=0; i < inputs.length; i++){
            inputs[i].value = '';
        }
    }

    function validatePost(){

        console.log('test')

        // input elements
        var inputs = document.querySelectorAll('input, textarea');

        // legal flag
        var isLegalInput = true;

        // check not empty
        for( let i=0; i < inputs.length; i++){
            if( inputs[i].value == '' ) isLegalInput = false;
        }

        console.log(isLegalInput)

        // send values to add post
        if( isLegalInput ) props.addPostFunc(inputs[0].value, inputs[1].value, inputs[2].value );
        
    }

    return (
        <div>

            {/* main add post div box */}
            <div style={{ margin: "30px", padding: "20px", backgroundColor: "gray", boxShadow: "0 0 10px gray" }}>

                {/* add post header */}
                <h2 style={{ color: "white", textAlign: "center" }}>Add new post</h2>

                {/* add post inputs */}
                <div style={{ display: "flex", flexDirection: "column" }}>

                    {/* author input */}
                    <input id="authorInput" type="text" placeholder="Author" style={{ backgroundColor: curBackgroundColor, border: "none", borderRadius: "5px", textAlign: "center", lineHeight: "30px", width: "300px", margin: "auto" }} />
                    <br />

                    {/* title input */}
                    <input id="titleInput" type="text" placeholder="Title" style={{ border: "none", borderRadius: "5px", textAlign: "center", lineHeight: "30px", width: "300px", margin: "auto" }} />
                    <br />

                    {/* info input */}
                    <textarea id="infoInput" placeholder="Info" style={{ border: "none", borderRadius: "5px", textAlign: "center", lineHeight: "30px", width: "300px", margin: "auto" }} />
                    <br />

                    {/* buttons */}
                    <div style={{ display: "inline", margin: "0 auto" }}>
                        <button onClick={clearFields} title="Clear fields" style={{ width: "100px", padding: "10px", margin: "0 10px", cursor: "pointer" }}>Clear</button>
                        <button onClick={validatePost} title="Add new post" style={{ width: "100px", padding: "10px", margin: "0 10px", cursor: "pointer" }}>Add post</button>
                    </div>
                </div>
            </div>
        </div>
    )

}