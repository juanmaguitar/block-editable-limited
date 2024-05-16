# block-editable-limited

[see demo](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/wordpress-juanmaguitar/block-editable-limited/trunk/_playground/blueprint.json)

```js
import { useBlockProps, RichText } from '@wordpress/block-editor';

const Edit = ( props ) => {
	const {
		attributes: { content },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const onChangeContent = ( newContent ) => {
		if ( newContent.length > 10 ) {
			return;
		}
		setAttributes( { content: newContent } );
	};
	return (
		<RichText
			{ ...blockProps }
			tagName="p"
			onChange={ onChangeContent }
			value={ content }
		/>
	);
};
export default Edit;
```

