// import {FixedSizeList as List} from 'react-window';
import {ComponentType, Fragment, FunctionComponent, PropsWithChildren, ReactNode, useState} from 'react';
import {NextPage} from 'next';



type SubItemProps = PropsWithChildren<{ } & React.HTMLAttributes<HTMLDivElement>>;
const SubItem:ComponentType<ItemProps> = (props) => {
  return (
    <div>sub</div>
  )
}

//
// type ItemProps = PropsWithChildren<{ } & React.HTMLAttributes<HTMLDivElement>>;
// const Item:ComponentType<ItemProps> = (props) => {
//   return (
//     <div>{props.children}</div>
//   )
// }
type ItemProps = PropsWithChildren<{ } & React.HTMLAttributes<HTMLDivElement>>;
const Item: ComponentType<{ children: (FunctionComponent | ReactNode | undefined)[] }> = (props: any) => {
  console.log('--->', props)
  return (
    <div>sssssss</div>
  )
}

type Props = {};
const Children:NextPage<Props> = (props) => {
  const [data, setData] = useState(10);
  return (
    <Fragment>
      <button className='btn' onClick={() => {
        setData(999)
      }}>aaa
      </button>
      <Item>
        <div></div>
        {SubItem}
        <SubItem></SubItem>
      </Item>
    </Fragment>
  );
};
Children.displayName = 'Children';
export default Children

