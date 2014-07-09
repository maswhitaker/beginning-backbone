var People = Backbone.Collection.extend({
  model: Person,
  comparator: "lastName"
});

var people = new People([
  {
              role: "student",
              imgUrl: "http://placekitten.com/200/200",
              firstName: 'Jon',
              lastName: 'Bill'
            },
{
          role: "dentist",
          imgUrl: "http://placekitten.com/200/200",
          firstName: 'Joe',
          lastName: 'Dann'
        },
{
          role: "cat",
          imgUrl: "http://placekitten.com/200/200",
          firstName: 'Mas',
          lastName: 'Whit'
        }
      ]);

      people.add([{
                role: "ninja",
                imgUrl: "http://placekitten.com/200/200",
                firstName: 'Blah',
                lastName: 'Ninj'
              }])
