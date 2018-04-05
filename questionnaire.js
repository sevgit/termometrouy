/* TODO, NOT URGENT
  - Create question modes (open-ended, close-ended, matrix, contingency)
  - Create survey maker that recieves json data (like the exported object below)
  and formulates the survey? Some kind of constructor maybe.
*/

export default {
  data: [
    {
      title: 'How satisfied are you with...',
      mode: 'Matrix',
      questions: [
        'your overall job?',
        'the balance between the time you spend on your work and the time you spend on other aspects of your life?',
      ],
    },
    {
      title: 'How much of the time you spend at work...',
      mode: 'Matrix',
      questions: [
        'are you absorbed in what you are doing?',
        'do you enjoy what you are doing?',
        'do you feel frustrated?',
        'do you feel bored?',
      ],
    },
    {
      title: 'Thinking about the job you do, in general would you say...',
      mode: 'Matrix',
      questions: [
        'that you feel happy when you are at work?',
        'you have control over the important elements of your job?',
        'that the job you do is worthwhile?',
        'you feel motivated to do the best you can in your job?',
        'that your job is stressful?',
      ],
    },
    {
      title: 'Thinking about your working life, in general would you say...',
      mode: 'Matrix',
      questions: [
        'that your organisation is a good organization to work for?',
        'that your organisation is well managed?',
        'you get along well with your manager?',
        'that the surroundings and physical conditions that you work in are pleasant?',
        'that the job you do has a beneficial impact on the lives of your customers?',
        'that the job you do is beneficial to society in general?',
      ],
    },
    {
      title: 'How much do the following statements apply to you:',
      mode: 'Matrix',
      questions: [
        'I have very good friends at work.',
        'I feel as if I can be myself at work.',
        'At work, I am regularly able to do what I do best.',
        'I have enough time, within my normal working hours, to get my job done.',
        'Considering all my efforts and achievements at work, I feel I get paid appropriately.',
        'I receive regular and constructive feedback on my performance.',
      ],
    },
    {
      title: 'To what extent...',
      mode: 'Matrix',
      questions: [
        'have you been able to learn new skills at work?',
        'do you get the chance to be creative in your job?',
        'does your job offer good prospects for progressing your career?',
        'can you influence decisions that are important for your work?',
        'do you feel proud to work for your organisation?',
        'do you feel trusted by your manager?',
        'is it safe to speak up and challenge the way things are done within your organisation?',
        'do you worry you might lose your job in the next six months?',
      ],
    },
    {
      title: 'To what extent...',
      mode: 'Matrix',
      questions: [
        'The next questions are about your team or the group of people you work most closely with.',
        'To what extent do you like the people within your team?',
        'In general would you say that your team is well managed?',
        'In general would you say that teams within your organisation work well together?',
      ],
    },
    {
      title: 'Now some questions about you and your life overall.',
      mode: 'Matrix',
      questions: [
        'Taking all things together, how happy would you say you are?',
        'In general would you say your overall health is good?',
        'To what extent do you feel full of energy in life?',
        'In general would you say you find it easy or difficult to deal with important problems that come up in your life?',
        'How much does the following statement apply to you:',
        'In general I am very positive about myself',
        'To what extent do you receive help and support from other people when you need it?',
      ],
    },
  ],
};
