import { Item } from 'react-photoswipe-gallery';
import Image from 'next/image';

export default function RenderImageItem({
  image,
  sizes = '100vw',
  priority = true,
}) {
  return (
    <Item original={image} thumbnail={image} width="1280" height="720">
      {({ ref, open }) => (
        <Image
          ref={ref}
          onClick={open}
          src={image}
          alt="image"
          fill
          sizes={sizes}
          priority={priority}
        />
      )}
    </Item>
  );
}
