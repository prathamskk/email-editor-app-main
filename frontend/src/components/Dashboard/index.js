import { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faDownload, faStar, faCog, faInfoCircle, faEdit } from '@fortawesome/free-solid-svg-icons'
import './index.css'

class Dashboard extends Component {
  state = { myTemplates: [] }

  componentDidMount() {
    this.getTemplatesFromDb()
  }

  getTemplatesFromDb = async () => {
    const response = await fetch('http://localhost:5000/templates')
    const templateArray = await response.json()
    console.log(templateArray);
    this.setState({ myTemplates: templateArray })
  }

  addNewTemplate = () => {
    const { myTemplates } = this.state
    const { history } = this.props
    history.push(`/template`)
    console.log("redirected")
  }

  renderTemplate = id => {
    const randomNumber = Math.floor(Math.random() * 5 + 1)
    return (
      <div key={id} className={`template-card shadow-sm card-${randomNumber}`}>
        <div className="template-details">
          <h1 className="template-title">Template-{id}</h1>
          <Link to={`/edit-template/${id}`}>
            <button className="btn edit-btn">
              <FontAwesomeIcon icon={faEdit} />
            </button>
          </Link>
        </div>
      </div>
    )
  }

  renderSideBar = () => (
    <div className="side-bar">
      <h1 className="side-bar-title mb-3">Email Editor</h1>
      <div className="info-container">
        <div className="info-details">
          <FontAwesomeIcon icon={faInfoCircle} className="info-icon" />
          <p className="about-text">About</p>
        </div>
        <hr className="info-hr" />
        <p className="info">
          A user-friendly Email Editor. Just drag-n-drop and you get beautiful styles in minutes.
        </p>
      </div>
    </div>
  )

  render() {
    const { myTemplates } = this.state
    return (
      <div className="bg-container">
        {this.renderSideBar()}
        <div className="content">
          <div className="d-flex justify-content-between">
            <h1 className="section-title">Templates</h1>
            <button className="btn-primary new-btn" onClick={this.addNewTemplate}>New Template</button>
          </div>
          <hr className="hr-line" />
          <div className="templates-container">
            {myTemplates.map(item => (
              this.renderTemplate(item)
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
