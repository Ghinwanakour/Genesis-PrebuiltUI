import React from 'react'

function MainTitle({ title, description }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold max-w-lg mx-auto mt-4 text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-center text-sm/7 text-gray-100 max-w-md mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}

export default MainTitle