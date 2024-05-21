import PropTypes from "prop-types"

function conditionalRendering(props) {
    const codeString = `
            function conditionalRendering(props) {
                return (props.renderThis ? 
                    <>
                            <h3>returned True</h3>
                            <h2>Entire example code is: </h2>
                            <div className="border">
                                {codeString}
                            </div>
                        </>
                        :
                        <>
                            <h3>returned False</h3>
                        </>
                )
            }
            export default conditionalRendering
            `;
    const caller = `<Cr renderThis={true} />`;
    const style = {
        fontFamily: "monospace"
    }
    return (props.renderThis ?
        <>
            <h3 className="display-4">Conditional rendering: props.renderThis returned True</h3>
            <h2>Entire example code is: </h2>
            <pre className="border rounded ml-5 mr-5">
                <p style={style}>{codeString}</p>
            </pre>
            <hr></hr>
            <p className="border rounded  ml-5 mr-5 p-3">Called using: {caller}</p>
        </>
        :
        <>
            <h3 className="display-4">Conditional rendering: props.renderThis returned False</h3>
            <h2>Entire example code is: </h2>
            <pre className="border rounded ml-5 mr-5">
                <p style={style}>{codeString}</p>
            </pre>
            <hr />
            <p className="border rounded  ml-5 mr-5 p-3">Called using: {caller}</p>
        </>
    )
    
}
conditionalRendering.proptypes = 
    {
        renderThis: PropTypes.bool
    }
export default conditionalRendering


