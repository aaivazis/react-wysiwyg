
'use strict'

// third party imports
import React from 'react/addons'
import StyleSheet from 'react-style'
// authorea-editor 
import EditorCore from '../../src/editor'
// local imports
import Toolbar from './toolbar'
import StaticElement from './staticElement'

class Editor extends React.Component {

    
    static propTypes = {
        initialContent: React.PropTypes.string,
    }


    static defaultProps = {
        initialContent: 'some initial content'
    }


    constructor(props) {
        // instantiate this
        super(props)
        // set the initial state
        this.state = {
            editor: null
        }
    }


    // called when the component is first mounted
    componentDidMount() {
        this.setState({
            // create the editor instance around the node
            editor: new EditorCore(React.findDOMNode(this.refs['editor_element']))
        })
    }


    // called before the component is removed from the dom
    componentWillUnmount() {
        this.editor.remove()
    }


    // render the component
    render() {
        // pull out the used properties
        const {initialContent, ...unused_props} = this.props
        // render the component
        return (
            <div {...unused_props}>
                <Toolbar editor={this.state.editor}/>
                {/* use a static element and let the editor take it over */}
                <StaticElement contentEditable={true} ref="editor_element"  id="editor_element"
                               innerHTML={initialContent}/>
            </div>
        )
    }
}

const styles = StyleSheet.create({})


export default Editor


// end of file
