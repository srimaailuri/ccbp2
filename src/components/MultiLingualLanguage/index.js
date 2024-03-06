import {Component} from 'react'

import ButtonCard from '../ButtonCard'

import {
  AppContainer,
  Header,
  ButtonsSection,
  GreetingContainer,
  Image,
} from './styledComponents'

class MultiLingualGreetings extends Component {
  state = {actId: ''}

  componentDidMount() {
    const {languageGreetingsList} = this.props
    const {actId} = this.state
    if (actId === '') {
      this.setState({actId: languageGreetingsList[0].id})
    }
  }

  onClickId = id => {
    this.setState({actId: id})
  }

  renderfilteredList = () => {
    const {languageGreetingsList} = this.props
    let {actId} = this.state
    console.log(actId)
    if (actId === '') {
      actId = languageGreetingsList[0].id
    }
    const filteredList = languageGreetingsList.filter(each => each.id === actId)
    return filteredList
  }

  render() {
    const {languageGreetingsList} = this.props
    const filteredList = this.renderfilteredList()
    return (
      <AppContainer>
        <Header>Multilingual Greetings</Header>
        <ButtonsSection>
          {languageGreetingsList.map(eachItem => (
            <ButtonCard
              ButtonDetails={eachItem}
              key={eachItem.id}
              onClickId={this.onClickId}
            />
          ))}
        </ButtonsSection>
        <GreetingContainer>
          <Image
            src={filteredList[0].imageUrl}
            alt={filteredList[0].imageAltText}
          />
        </GreetingContainer>
      </AppContainer>
    )
  }
}

export default MultiLingualGreetings
