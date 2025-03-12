import CheckoutForm from '@/components/forms/CheckoutForm';

// eslint-disable-next-line react/prop-types
export default async function CheckoutPage({params}) {
    const p = await params;
   const res = await fetch(`http://localhost:3000/api/service/${p.id}`)
   const data = await res.json();
  return (
    
    <div>
      <CheckoutForm data={data}/>
      {JSON.stringify(data)}</div>
  )
}
