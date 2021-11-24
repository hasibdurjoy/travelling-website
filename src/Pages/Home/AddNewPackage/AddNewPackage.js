import React from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddNewPackage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        Swal.fire({
            icon: 'question',
            title: 'Add new package',
            showDenyButton: true, showCancelButton: true,
            confirmButtonText: `Yes`,
            denyButtonText: `No`,
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch('https://peaceful-wave-84930.herokuapp.com/packages', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.insertedId) {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Added Successfully',
                                })
                                reset();
                            }
                        })
                }
                else if (result.isDenied) {
                    Swal.fire('Changes are not saved', '', 'info')
                }
            });
    }
    return (
        <Card className="border-0 shadow px-2 rounded mx-auto mt-3">
            <Card.Body>
                <h4>Add New Package</h4>
                <form onSubmit={handleSubmit(onSubmit)} className="text-start w-50 mx-auto">
                    <input required  {...register("place")} type="text" className="mt-2 p-2 rounded  border-top-0 border-start-0 border-end-0 w-100" placeholder="Package name " /> <br />

                    <input required  {...register("route")} type="text" className="mt-2 p-2 rounded  border-top-0 border-start-0 border-end-0 w-100" placeholder="Route " /> <br />

                    <input required  {...register("duration")} type="text" className="mt-2 p-2 rounded  border-top-0 border-start-0 border-end-0 w-100" placeholder="Package duration (ex: 2days 1 night) " /> <br />

                    <input required  {...register("cost")} type="number" className="mt-2 p-2 rounded  border-top-0 border-start-0 border-end-0 w-100" placeholder="Package cost per person" /> <br />

                    <textarea required  {...register("description")} type="text" className="mt-2 p-2 rounded  border-top-0 border-start-0 border-end-0 w-100" placeholder="Package description" /> <br />

                    <input required {...register("img")} type="text" className="mt-2 p-2 rounded  border-top-0 border-start-0 border-end-0 w-100" placeholder="enter a valid image url " /> <br />

                    <input required  {...register("transport")} type="text" className="mt-2 p-2 rounded  border-top-0 border-start-0 border-end-0 w-100" placeholder="Transport " /> <br />

                    <input type="submit" value="Add " className="my-4 p-2 rounded border-1 w-100 btn btn-primary" />
                </form>

            </Card.Body>
        </Card>
    );
};

export default AddNewPackage;