{
  type Student = {
    name: string;
    studentId: string;
  }

  type Worker = {
    task: string;
    location: string;
    work: () => void;
  }

  const InternWork = (person: Student & Worker) => {
    console.log(person);
  }

  InternWork({
    name: 'Jake',
    studentId: '2007000238',
    task: 'front end developement',
    location: 'Toronto',
    work: () => null
  });
}