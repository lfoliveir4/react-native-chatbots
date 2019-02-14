import React, { Component } from 'react';

import Bot from 'react-native-chatbot';


// instruções do que o chatbot irá seguir
const steps = [
  {
    id: '1',
    message: 'Bem Vindo ao ChatBot React! Qual seu nome???!',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: 'ola',
  },
  {
    id: 'ola',
    message: 'Olá {previousValue}',
    trigger: '3',
  },
  {
    id: '3',
    message: 'O que quer saber de mim?',
    trigger: '4',
  },
  {
    id: '4',
    options: [
      { value: 1, label: 'Quantas onças voce matou???', trigger: '5' },
      { value: 2, label: 'Essa história é realmente verdade?', trigger: '6' },
      { value: 3, label: 'Qual som a onça faz?', trigger: '7' },
      { value: 4, label: 'Quero nada não, tchau', trigger:'8' },
    ],
  },
  {
    id: '5',
    message: 'Matei uma que valeu por duas ou mais!',
    trigger: '3',
  },
  {
    id: '6',
    message: 'É verdade, não minto!',
    trigger: '3',
  },
  {
    id: '7',
    message: 'ela faz assim: niiiiiAAAAAAaurrrrrr',
    trigger: '3',
  },
  {
    id: '8',
    message: 'Até mais!!!!!!!!',
    end: true
  },

];

// exportação da classe Chatbot contendo o nosso component bot e suas instruções

export default class Chatbot extends Component {
  render () {
    return (
      // Regras
      <Bot steps={steps}

      // Avatar do bot e usuario
      botAvatar="https://i.imgur.com/uVRn78V.png"
      userAvatar="https://i.imgur.com/6sm2DYv.png"

      botFontColor={ '#FFFDF8' }
      userFontColor={ '#FFFDF8' }
      botBubbleColor={ '#E89984' }
      userBubbleColor={ '#FFC286' }

      // Cores de Fundo do Chatbot
      style={{ backgroundColor: '#FFFDF8', marginTop: 2 }}
      contentStyle={{ backgroundColor: '#FFFDF8' }}

      // Estilo Rodapé
      footerStyle={{ backgroundColor: '#fff', margin:5, padding:1, borderRadius: 7, elevation: 2}}
      submitButtonStyle={{ backgroundColor: '#E89984', borderRadius: 4, width: 63, margin: 2}}

      />

    );
  }
}
