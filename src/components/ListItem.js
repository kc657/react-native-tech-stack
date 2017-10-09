import React, {Component} from 'react'
import {Text, TouchableWithoutFeedback, View} from 'react-native'
import {connect} from 'react-redux'
import {CardSection} from './common'
import * as actions from '../actions'

class ListItem extends Component {

  renderDescription = () => {
    const {library, expanded} = this.props
    if(expanded) {
      return(
        <CardSection style={{flex: 1}}>
          <Text>{library.description}</Text>
        </CardSection>
      )
    }
  }

  render () {
    const {id, title} = this.props.library
    const {titleStyle} = styles

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id
  return{expanded: expanded}
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

export default connect(mapStateToProps, actions)(ListItem)
