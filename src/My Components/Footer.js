import React from 'react'

const Footer = () => {
  let footerstyle = { position: 'relative', top: '70vh', width: '100%', border: '2px solid red' } //this is an object that i have made to add style to the footer, you can add styles by creating an object followed by calling that object or you can just use the css stylesheet
  return (
    <footer className='bg-dark text-light py-3' style={footerstyle}>
      <p className='text-center'>
        Copyright &copy;<br />
        mytodolist.com
      </p>
    </footer>
  )
}

export default Footer
