'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import FormContainer from './FormContainer';
import ImageInput from './ImageInput';
import { SubmitButton } from './Buttons';
import { type actionFunction } from '@/utils/types';
import { LuUser2 } from 'react-icons/lu';

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};

function ImageInputContainer(props: ImageInputContainerProps) {
  const { image, name, action, text } = props;
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);

  const userIcon = (
    <LuUser2 className="w-24 h-24 bg-primary rounded-md text-white mb-4" />
  );

  return (
    <div>
      {image ? (
        <div className="relative size-28 border-4 rounded-md border-primary group overflow-hidden mb-2">
          <Image
            src={image}
            fill
            className=" object-cover mb-4 w-24 h-24 group-hover:scale-110 duration-200"
            alt={name}
          />
        </div>
      ) : (
        userIcon
      )}

      <Button
        variant="outline"
        size="sm"
        onClick={() => setUpdateFormVisible((prev) => !prev)}
      >
        {!isUpdateFormVisible ? text : 'Cancel Update'}
      </Button>
      {isUpdateFormVisible && (
        <div className="max-w-lg mt-4 p-0">
          <FormContainer action={action}>
            {props.children}
            <ImageInput />
            <SubmitButton size="sm" text="Update Image" />
          </FormContainer>
        </div>
      )}
    </div>
  );
}
export default ImageInputContainer;
