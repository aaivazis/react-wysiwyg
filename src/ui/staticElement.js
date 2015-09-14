// a wrapper component around ckeditor so that react can be told not to update

'use strict'

// third party imports
import React from 'react/addons'


class CKEditor extends React.Component {

    // never update so that CKEditor is responsible
    shouldComponentUpdate() {
        return false
    }


    // render the component
    render() {
        // grab the props passed to us
        const {innerHTML, ...unused_props} = this.props
        // mark the innerHTML prop as safe
        function getContents() { return {__html: innerHTML} }
        // render the component
        return ( 
            <div {...unused_props} dangerouslySetInnerHTML={getContents()}/>
        )
    }
}


export default CKEditor


// end of file
