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
    this.setState({actId: languageGreetingsList[0].id})
  }

  onClickId = id => {
    this.setState({actId: id})
  }

  render() {
    const {languageGreetingsList} = this.props
    const {actId} = this.state
    const filteredList = languageGreetingsList.filter(each => each.id === actId)
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
          <Image src={filteredList.imageUrl} alt={filteredList.imageAltText} />
        </GreetingContainer>
      </AppContainer>
    )
  }
}

export default MultiLingualGreetings
