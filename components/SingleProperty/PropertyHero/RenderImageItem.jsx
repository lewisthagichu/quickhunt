import { Item } from 'react-photoswipe-gallery';
import Image from 'next/image';

export default function RenderImageItem({ image, sizes = '100vw' }) {
  return (
    <Item
      original={`/images/properties/${image}`}
      thumbnail={`/images/properties/${image}`}
      width="1280"
      height="720"
    >
      {({ ref, open }) => (
        <Image
          ref={ref}
          onClick={open}
          src={`/images/properties/${image}`}
          alt="image"
          fill
          sizes={sizes}
          priority={true}
        />
      )}
    </Item>
  );
}
