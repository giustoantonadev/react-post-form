import { useState } from "react";
import axios from "axios";



export default function FormPost() {


    const [formData, setFormData] = useState({
        author: '',
        title: '',
        body: '',
        public: false
    })

    console.log(formData);

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
        axios({
            method: "post",
            url: "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts",
            data: formData
        });


    }


    return (

        <form className="row g-3" onSubmit={handleSubmit}>

            <div className="col-md-4">
                <label className="form-label">Author</label>
                <input
                    type="text"
                    onChange={e => setFormData({ ...formData, 'author': e.target.value })}
                    className="form-control" id="validationDefault01" value={formData.author}
                    required
                />
            </div>

            <div className="col-md-4">
                <label className="form-label">Title</label>
                <input
                    type="text"
                    onChange={e => setFormData({ ...formData, 'title': e.target.value })}
                    className="form-control"
                    id="validationDefault02"
                    value={formData.title}
                    required
                />
            </div>

            <div className="col-md-4">
                <label className="form-label">Body</label>
                <textarea
                    type="text"
                    onChange={e => setFormData({ ...formData, 'body': e.target.value })}
                    className="form-control"
                    id="validationDefault02"
                    value={formData.body}
                    required
                />
            </div>

            <div className="col-12">
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value={formData.public}
                        id="invalidCheck2"
                        onChange={() => setFormData({ ...formData, 'public': !formData.public })}
                        required />
                    <label className="form-check-label">
                        Public
                    </label>
                </div>
            </div>

            <div className="col-12">
                <button className="btn btn-primary" type="submit">Submit form</button>
            </div>

        </form>

    )
}
