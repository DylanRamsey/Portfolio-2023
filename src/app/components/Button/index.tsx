interface Props {
  buttonText: string,
}


export default function Button(props: Props) {
  return (
    <div className="mx-auto text-4xl border-white border-4 max-w-max px-4 py-2">
      {props.buttonText}
    </div>
  )
}
