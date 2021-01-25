import React from 'react';
import { Alert, Text, TouchableOpacity } from 'react-native';

interface IProps {
    question: IQuestion;
}

export class Question extends React.Component<IProps> {
    public eventHandlers = {
        selectAnswer: (event: string) => this.selectAnswer(event),
    };

    constructor(props: Readonly<IProps>) {
        super(props);
        this.state = {
            backgroundColor: '#DDDDDD',
            borderBottomWidth: 2,
            padding: 10,
        };
    }

    public render() {
        const { question } = this.props;
        return (
            <>
                <Text>{question.question}</Text>
                {question.options.map((option, i) =>
                    (
                        <TouchableOpacity style={this.state} key={i} onPress={() => this.eventHandlers.selectAnswer(option)}>
                            <Text>{i + 1}{' ' + option}{'\n'}</Text>
                        </TouchableOpacity>
                    ))}
            </>
        );
    }
    selectAnswer(event: string) {
        if (event === this.props.question.correctOption) {
            this.setState({ backgroundColor: '#76B900'});
            Alert.alert(
                'Juist',
                'Dat was goed!',
              );

            setTimeout(() => {
                this.setState({ backgroundColor: '#DDDDDD'});
              },       2300);
        } else {
            this.setState({ backgroundColor: '#ff0000'});
            Alert.alert(
                'Oeps',
                'Dat was helaas niet juist',
                [
                  { text: 'Probeer het opieuw' },
                ],
                { cancelable: false },
              );

            setTimeout(() => {
                this.setState({ backgroundColor: '#DDDDDD'});
              },       2300);
        }
    }
}
