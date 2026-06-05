import { useForm } from '@inertiajs/react';

export default function CreateBlog() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
        image: null,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('insert-blog-data'), {
            forceFormData: true,
        });
    };

    return (
        <div className="container mt-5">

            <div className="row justify-content-center">
                <div className="col-md-6">

                    <form onSubmit={submit} className="card p-4 shadow-sm">

                        <h3 className="text-center mb-4">Create Blog</h3>

                        {/* Blog Name */}
                        <div className="mb-3">
                            <label className="form-label">Blog Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                            />
                            {errors.name && (
                                <div className="text-danger small mt-1">
                                    {errors.name}
                                </div>
                            )}
                        </div>

                        {/* Description */}
                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea
                                className="form-control"
                                rows="4"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                            ></textarea>

                            {errors.description && (
                                <div className="text-danger small mt-1">
                                    {errors.description}
                                </div>
                            )}
                        </div>

                        {/* Image Upload */}
                        <div className="mb-3">
                            <label className="form-label">Image</label>
                            <input
                                type="file"
                                className="form-control"
                                accept='image/*'
                                onChange={(e) =>
                                    setData('image', e.target.files[0])
                                }
                            />

                            {errors.image && (
                                <div className="text-danger small mt-1">
                                    {errors.image}
                                </div>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={processing}
                            className="btn btn-primary w-100"
                        >
                            {processing ? 'Saving...' : 'Create Blog'}
                        </button>
                        <a href={route('dashboard')} className='btn btn-secondary mt-2'>Back</a>

                    </form>

                </div>
            </div>
        </div>
    );
}