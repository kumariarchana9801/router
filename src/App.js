import React,{useState}from 'react'
import '../src/App.css'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Home from './components/Home'
import Fullstack from './components/Fullstack'
import Datasci from './components/Datasci'
import Cyber from './components/Cyber'
import Career from './components/Career'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,Navbar,Container,NavDropdown } from 'react-bootstrap'

function App() {

  let [courses,setCourses]=useState([
    {
      course:"FSD",
      name:"MERN STACK",
      details:" One of the most famous stack that is used for Web Development is MERN stack. This stack provides an end-to-end framework for the developers to work in and each of these technologies play a big part in the development of web applications.",
      image:"https://miro.medium.com/v2/resize:fit:678/0*kxPYwfJmkXZ3iCWy.png"
    },
    {
      course:"FSD",
      name:"PYTHON STACK",
      details:"Full-stack development refers to the design, implementation and testing of both the client, and server sides of a web application. A Python full-stack developer is proficient in handling the front- and back-end of a website or an application",
      image:"https://w7.pngwing.com/pngs/761/45/png-transparent-professional-python-programmer-computer-programming-android-android-blue-logo-computer-program-thumbnail.png"
    },
    {
      course:"FSD",
      name:"JAVA STACK",
      details:"Java Full Stack Development refers to the development of both front-end (client-side) and back-end (server-side) parts of a web application. This involves using Java programming language for server-side development,",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqvl8l1pqXNzGs4-7HNMGsK0z-NjaGKYUf6TZQW8M4rQ&s"
    },
    {
      course:"DS",
      name:"DATA SCIENCE",
      details:"Data science is the study of data to extract meaningful insights for business. It is a multidisciplinary approach that combines principles and practices from the fields of mathematics, statistics, artificial intelligence",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz5M-cVpI7rwa1nNX0gKze8vnQO8rlvTpDJA&s"
    },
    {
      course:"DS",
      name:"MACHINE LEARNING",
      details:"What is machine learning? Machine learning is an area of artificial intelligence and computer science that comprises supervised and unsupervised learning and includes the development of software and algorithms that can make predictions based on data.",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4C_v4OWTFLt9x7lES1f7n_273Djp2382n1A&s"
    },
    {
      course:"DS",
      name:"DATA SCIENCE ADVANCED",
      details:"A Data Science Advanced Course provides exposure to machine learning and other advanced techniques. It helps you learn software development through Dashboards, Machine Learning, Prediction Models, Regression Analysis and other latest technologies.",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRryi047H_iwZXu7z0ZILCgwI9SfjPphVwHPQ&s"
    },
    {
      course:"CS",
      name:"CYBER SECURITY",
      details:"This unit will explore various topics, including types of malware, social engineering attacks, Advanced Persistent Threats, and insider threats. The unit also covers threat intelligence and hunting, vulnerabilities and exploits, penetration testing techniques, and secure application development.",
      image:"https://img.lovepik.com/free-png/20211214/lovepik-network-security-lock-png-image_401593002_wh1200.png"
    },
    {
      course:"CS",
      name:"ETHICAL HACKING",
      details:"Take an ethical hacking course, and learn how to set up a hacking lab and perform penetration testing to improve network security. Hacking classes are taught by instructors with real world expertise who provide ethical hacking training to arm you with skills and tools to keep your networks safe.",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMUFMpPE88GUWTMbt5hoK8PQYbeIcIdNs7Fw&s"
    },
    {
      course:"CAREER",
      name:"MS EXCEL",
      details:"Excel is extensively used for accounting and finance functions. It is a data management tool and the most commonly used data in excel is financial data. Companies run accounting, budgeting, and forecasting functions in Excel spreadsheets.",
      image:"https://w7.pngwing.com/pngs/670/803/png-transparent-excel-logo-logos-logos-and-brands-icon-thumbnail.png"
    },
    {
      course:"CAREER",
      name:"MS WORD",
      details:"The Microsoft Office courses we offer are designed to help prepare you for a career in business administration, data management, document control, and office productivity, offering mastery in essential tools like Word, Excel, PowerPoint, and Outlook.",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrbO3T8OhYKK0Aa4sYLQ52FJ6VmbD7wyzFA&s"
    },
    {
      course:"CAREER",
      name:"SPOKEN ENGLISH",
      details:"By focusing on the ESSENTIAL parts of English, including the most common phrases, idioms, expressions and sentence patterns that are often used in daily life, you will achieve conversational fluency MUCH FASTER than normal.",
      image:"https://e7.pngegg.com/pngimages/610/538/png-clipart-do-you-speak-english-text-oxford-english-dictionary-oxford-dictionary-of-english-common-european-framework-of-reference-for-languages-cambridge-assessment-english-others-english-text-thumbnail.png"
    } 
  ])
  return (
    <BrowserRouter>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPrLPoNw187-L9IaUlQurMZSM1Ar4Pt2EbAB2O7qbmSQ&s" alt="img" className='guvi' />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="dd me-auto">
            <NavDropdown className='hd' title="LIVE CLASSES" id="collapsible-nav-dropdown">
              <NavDropdown.Item >FSD PROGRAM</NavDropdown.Item>
              <NavDropdown.Item >DATA SCIENCE</NavDropdown.Item>
              <NavDropdown.Item >CLOUD PROGRAM</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='hd' title="PRACTICE" id="collapsible-nav-dropdown">
              <NavDropdown.Item >CODEKATA</NavDropdown.Item>
              <NavDropdown.Item >WEBKATA</NavDropdown.Item>
              <NavDropdown.Item >ONLINE COMPILER</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='hd' title="RESOURCES" id="collapsible-nav-dropdown">
              <NavDropdown.Item >REWARDS</NavDropdown.Item>
              <NavDropdown.Item >REFERALS</NavDropdown.Item>
              <NavDropdown.Item >FORUMS</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='hd' title=" PRODUCTS" id="collapsible-nav-dropdown">
              <NavDropdown.Item >HACKER KID</NavDropdown.Item>
              <NavDropdown.Item >GUVI FOR CORPORATES</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        
        </Navbar.Collapse>
    </Navbar>
          
          <div className='container'>
          <img src='https://png.pngtree.com/png-vector/20220521/ourmid/pngtree-open-book-logo-png-image-png-image_4699354.png' alt="Logo" className="logo" />
          <Nav variant="underline" defaultActiveKey="/" className='custom-nav'>
          <Nav.Item>
            <Nav.Link as={Link} to="/" className='links'>ALL</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/Fullstack" className='links'>FULL STACK DEVELOPMENT</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/datascience" className='links'>DATA SCIENCE</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link}  to="/cybersecurity" className='links'>CYBER SECURITY</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link  as={Link} to="/career" className='links'>CAREER</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      <Routes>
        <Route path='/' element={<Home courses={courses} setCourses={setCourses}/>}></Route>
        <Route path='/Fullstack' element={<Fullstack courses={courses} setCourses={setCourses}/>}></Route>
        <Route path='/datascience' element={<Datasci courses={courses} setCourses={setCourses}/>}></Route>
        <Route path='/cybersecurity' element={<Cyber courses={courses} setCourses={setCourses}/>}></Route>
        <Route path='/career' element={<Career courses={courses} setCourses={setCourses}/>}></Route>
      </Routes>
      
    </BrowserRouter>

    
  )
}

export default App