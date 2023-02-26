import styled from '@emotion/styled'
import tw from 'twin.macro'
import Tag from 'Tags'

function App() {
  return (
    <div tw="container mx-auto">
      <div tw="max-w-[800px] flex flex-wrap gap-[10px] justify-center">
        {[
          {
            title: 'C',
            link: '/',
            active: true,
          },
          {
            title: 'C++',
            link: '/',
          },
          {
            title: 'Java',
            link: '/',
          },
          {
            title: 'Python',
            link: '/',
          },
          {
            title: 'JavaScript',
            link: '/',
          },
          {
            title: 'Ruby',
            link: '/',
          },
          {
            title: 'Go',
            link: '/',
          },
          {
            title: 'Rust',
            link: '/',
          },
          {
            title: 'Swift',
            link: '/',
          },
          {
            title: 'Kotlin',
            link: '/',
            active: true,
          },
          {
            title: 'HTML',
            link: '/',
          },
          {
            title: 'CSS',
            link: '/',
          },
          {
            title: 'JavaScript',
            link: '/',
            active: true,
          },
          {
            title: 'React',
            link: '/',
          },
          {
            title: 'Vue.js',
            link: '/',
          },
          {
            title: 'Angular',
            link: '/',
          },
          {
            title: 'Node.js',
            link: '/',
          },
          {
            title: 'Express',
            link: '/',
            active: true,
          },
          {
            title: 'Django',
            link: '/',
          },
          {
            title: 'Flask',
            link: '/',
          },
        ].map(props => <Tag {...props} tw="font-bold" />)}
      </div>
    </div>
  )
}

export default App

const Button = styled.button`
  ${tw`bg-black`}
`