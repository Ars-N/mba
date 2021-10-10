export interface ResponseData extends ProgramProps {
  _id: string | number;
}
export interface ProgramProps {
  title: string;
  specializedSubjects: string[];
}

export const fetchingData = async (): Promise<ResponseData[]> => {
  const lengthSpecializedSubjects = 10;
  const maxProgramsOnPage = 5;

  const responseData: void | { data: [] } = await fetch(
    'https://ipo-cp.ru/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses'
  ).then((response) => response.json());
  const temporaryList: ResponseData[] = [];

  responseData?.data
    .map(({ title, _id, specializedSubjects }: ResponseData) => {
      return { title, _id, specializedSubjects };
    })
    .map((arg) => {
      return (
        temporaryList.every(
          (temporaryListVal) => temporaryListVal.title !== arg.title
        ) &&
        temporaryList.length < maxProgramsOnPage &&
        arg.specializedSubjects.length === lengthSpecializedSubjects &&
        temporaryList.push(arg)
      );
    });
  return temporaryList;
};
