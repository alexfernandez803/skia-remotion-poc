import { Canvas, Circle, ImageFormat, useCanvasRef } from '@shopify/react-native-skia';
import { useEffect } from 'react';



export const HelloSkia: React.FC = () => {
	const ref = useCanvasRef();
	useEffect(() => {
		setTimeout(() => {
			// you can pass an optional rectangle
			// to only save part of the image
			const image = ref.current?.makeImageSnapshot();
			if (image) {


				const data = image.encodeToBase64(ImageFormat.PNG, 100);
				const url = `data:image/png;base64,${data}`;
				console.log(url)
			}
		}, 1000)
	});
	return (
		<Canvas style={{ flex: 1 }} ref={ref}>
			<Circle r={128} cx={128} cy={128} color="red" />
		</Canvas>
	);

};
