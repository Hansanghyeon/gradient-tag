import _ from 'lodash'
import { useRef, useState } from "react";
import tw, { css } from 'twin.macro';
import gradients from './gradients.json'
import { useHover } from 'usehooks-ts'
import * as Color from 'color-utils';

interface ItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  title: string
  link: string
  active?: boolean
}

const Tag = ({ title, link, active, ...props }: ItemProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null)
  const isHover = useHover(ref)
  const [gradient] = useState<{
    name: string;
    colors: string[];
  }>(gradients[_.random(0, gradients.length - 1)])
  const textColor = Color.getBrightness(Color.getAverageColor(gradient.colors)) > 170 ? '#222' : '#fff'

  return (
    <a href={link} data-colorname={gradient.name} css={[
      tw`no-underline rounded-[999px] px-[16px] py-[8px] flex relative bg-[#eee] dark:bg-[#31363e] overflow-hidden hover:shadow-sm`,
    ]} {...props} ref={ref}>
      <div css={[
        tw`absolute w-full h-full left-0 top-0 transition-all duration-500 ease-in-out`,
        css`
          & {
            background: linear-gradient(to left, ${[...gradient.colors].join(', ')});
          }
        `,
        (isHover || active) ? tw`opacity-100` : tw`opacity-0`
      ]} />
      <span css={[
        tw`relative text-[#222] dark:text-white`,
        (isHover || active) && css`&{ color: ${textColor}; }`
      ]}>
        #{title}
      </span>
    </a>
  )
}

export default Tag;