using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Domain;


namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        private readonly DataContext _context;
        public ActivitiesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await _context.Activities.ToListAsync();
            // return await Enumerable.Select<Activity>(index => new Activity
            // {
            //     Id = Activity.Id,
            //     Title = Activity.Title,
            //     Date = Activity.Date,
            //     Category = Activity.Category,
            //     Description = Activity.Description,
            //     City = Activity.City,
            //     Venue = Activity.Venue
            // }).ToList();
        }
    }
}