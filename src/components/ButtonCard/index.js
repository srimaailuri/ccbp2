import {BtnList, Button} from './styledComponents'

const ButtonCard = props => {
  const {ButtonDetails, onClickId} = props
  const {id, buttonText} = ButtonDetails

  const onClickBtn = () => {
    onClickId(id)
  }

  return (
    <BtnList>
      <Button type="button" onClick={onClickBtn}>
        {buttonText}
      </Button>
    </BtnList>
  )
}

export default ButtonCard
