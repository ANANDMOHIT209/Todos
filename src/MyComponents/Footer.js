import React from 'react'

export const Footer = () => {
  let footerStyle={
    position: "relative",
    top: "12vh",
    width: "100%",
    backgroundColor: "Grey"
  }
  return (
    
    <footer className=" text-light py-1" style={footerStyle}>
      <p className="text-center">Copyright &copy; MyTodosList.com</p>
      
    </footer>
    
  )
}
